import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@api": path.resolve(__dirname, "src/api"),
      "@lib": path.resolve(__dirname, "src/lib"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@data": path.resolve(__dirname, "src/data"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@library": path.resolve(__dirname, "src/library"),
    },
  },
});
