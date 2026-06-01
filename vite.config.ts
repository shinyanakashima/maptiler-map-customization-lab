import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// GitHub Pages では https://<user>.github.io/maptiler-map-customization-lab/ に
// 配信されるため、本番ビルド時のみ base にリポジトリ名を指定する。
export default defineConfig(({ command }) => ({
  base: command === "build" ? "/maptiler-map-customization-lab/" : "/",
  plugins: [react()],
}));
