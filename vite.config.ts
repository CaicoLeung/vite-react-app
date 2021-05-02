import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import tsconfigPaths from 'vite-tsconfig-paths'
import vitePluginImp from "vite-plugin-imp";
import path from "path";
import fs from "fs";
import lessToJS from "less-vars-to-js";

const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, "./config/variables.less"), "utf8")
);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    tsconfigPaths(),
    vitePluginImp({
      libList: [
        {
          libName: "antd",
          style: (name) => `antd/lib/${name}/style/index.less`,
        },
      ],
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: themeVariables,
      },
    },
  },
  server: {
    force: true
  }
})
