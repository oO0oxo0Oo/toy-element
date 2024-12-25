import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import dts from 'vite-plugin-dts';
import { delay, filter, map } from "lodash-es";
import { readdirSync } from "fs";
import shell from 'shelljs';
import hooks from './hooksPlugin';

const TRY_MOVE_STYLES_DELAY=800 as const
function moveStyles() {
  try{
    readdirSync("./dist/es/theme");
    shell.mv("./dist/es/theme", "./dist")
  }catch(_){
    delay(moveStyles, TRY_MOVE_STYLES_DELAY);
  }
}

function getDirectoriesSync(basePath: string) {
  const entries = readdirSync(basePath, { withFileTypes: true });

  return map(
    filter(entries, (entry) => entry.isDirectory()),
    (entry) => entry.name
  );
}
// 定义Vite配置
export default defineConfig({
  // 应用插件，这里只应用了vue插件
  plugins: [
    vue(), 
    dts({
    tsconfigPath: '../../tsconfig.build.json',
    outDir: "dist/types"
    }),
    hooks({
      rmFiles:['./dist/es','./dist/theme','./dist/types'],
      afterBuild: moveStyles,
    })
  ],
  build: {
    // 构建输出目录
    outDir: 'dist/es',
    minify: false,
    cssCodeSplit: true,
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
          if (assetInfo.name === 'style.css') return 'index.css';
          if (
            assetInfo.type === 'asset' &&
            /\.(css)$/i.test(assetInfo.name as string)
          ){
            return "theme/[name].[ext]";
          }
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
          for (const item of getDirectoriesSync("../components")) {
            if (id.includes(`/packages/components/${item}`)) {
              return item;
            }
          }

        }
      }
    }
  }
})