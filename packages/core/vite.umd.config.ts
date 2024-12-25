import { defineConfig } from "vite";
import {compression} from "vite-plugin-compression2"
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { readFileSync } from "fs";
import shell from 'shelljs';
import { delay } from "lodash-es";
import hooks from "./hooksPlugin";

const TRY_MOVE_STYLES_DELAY=800 as const
function moveStyles() {
  try{
    readFileSync("./dist/umd/index.css.gz");
    shell.cp("./dist/umd/index.css", "./dist/index.css")
  }catch(_){
    delay(moveStyles, TRY_MOVE_STYLES_DELAY);
  }
}

// 定义Vite配置
export default defineConfig({
  plugins: [
    vue(),
    compression({
      include: /.(cjs|css)$/i,
    }),
    hooks({
      rmFiles:['./dist/umd','./dist/index.css'],
      afterBuild: moveStyles,
    })
  ],
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
          if (assetInfo.name === 'style.css') return 'index.css';
          return assetInfo.name as string;
        }
      }
    }
  }
})