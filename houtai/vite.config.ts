import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { viteMockServe } from "vite-plugin-mock";

import path from "path";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
// https://vite.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [
      vue(),

      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
        symbolId: "icon-[dir]-[name]",
      }),
      viteMockServe({
        mockPath: "mock", // 关键配置：指向存放接口文件的目录
        localEnabled: command === "serve",
        prodEnabled: false, // 生产环境关闭 mock
        watchFiles: true, // 监听文件变化
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "@/styles/variable.scss";
          `,
        },
      },
    },
  };
});
