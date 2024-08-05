import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config()

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {

  const env = loadEnv(mode, process.cwd(), '')
  console.log("mode",mode)
  console.log("env",process.env.VITE_BACKEND_URL)
  return {
    plugins: [react()],
    define: {
      "import.meta.env.VITE_BACKEND_URL": JSON.stringify(env.VITE_BACKEND_URL)
    },
    server: {
      proxy: {
        "/api": {
          target: JSON.stringify(env.VITE_BACKEND_URL),
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  };
});
