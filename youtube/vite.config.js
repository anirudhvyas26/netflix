import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

// load environtment variables from .env file
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {

  // const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react()],
    define: {
      "process.env": process.env
    },
    server: {
      proxy: {
        "/api": {
          target: process.env.VITE_BACKEND_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  };
});
