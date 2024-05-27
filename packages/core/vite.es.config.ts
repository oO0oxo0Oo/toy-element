import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import dts from 'vite-plugin-dts';

const COMP_NAMES = [
  "Alert",
  "Button",
  "Collapse",
  "Dropdown",
  "Icon",
  "Input",
  "Loading",
  "Message",
  "MessageBox",
  "Notification",
  "Overlay",
  "Popconfirm",
  "Select",
  "Switch",
  "Tooltip",
  "Upload",
] as const;

// 定义Vite配置
export default defineConfig({
  // 应用插件，这里只应用了vue插件
  plugins: [vue(), dts({
    tsconfigPath: '../../tsconfig.build.json',
    outDir: "dist/types"
  })],
  build: {
    // 构建输出目录
    outDir: 'dist/es',
    // 定义库配置
    lib: {
      // 入口文件路径
      entry: resolve(__dirname, './index.ts'),
      // 库名称
      name: 'ToyElement',
      // 输出文件名
      fileName: 'index',
      // 支持的格式
      formats: ['es']
    },
    rollupOptions: {
      // 外部依赖列表
      external: [
        'vue',
        "@fortawesome/fontawesome-svg-core",
        "@fortawesome/free-solid-svg-icons",
        "@fortawesome/vue-fontawesome",
        "@popperjs/core",
        "async-validator",
      ],
      output: {
        // 资源文件命名规则
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'index.css'
          return assetInfo.name as string;
        },
        // 根据传入的id进行相应的处理逻辑
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
          if (id.includes("/packages/hooks")) {
            return "hooks";
          }
          if (id.includes("/packages/utils")) {
            return "utils";
          }
          for (const item of COMP_NAMES) {
            if (id.includes(`/packages/components/${item}`)) {
              return item;
            }
          }

        }
      }
    }
  }
})