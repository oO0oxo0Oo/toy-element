import { defineConfig } from "vite";

import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// 定义Vite配置
export default defineConfig({
  // 应用插件，这里只应用了vue插件
  plugins: [vue()],
  build: {
    // 构建输出目录
    outDir: 'dist/umd',
    // 定义库配置
    lib: {
      // 入口文件路径
      entry: resolve(__dirname, './index.ts'),
      // 库名称
      name: 'ToyElement',
      // 输出文件名
      fileName: 'index',
      // 支持的格式
      formats: ['umd']
    },
    rollupOptions: {
      // 外部依赖列表
      external: ['vue'],
      output: {
        // 导出类型
        exports: 'named',
        // 全球变量映射
        globals: {
          vue: 'Vue'
        },
        // 资源文件命名规则
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'index.css'
          return assetInfo.name as string;
        }
      }
    }
  }
})