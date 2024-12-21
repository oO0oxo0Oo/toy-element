
/// <reference types="vitest" /> 

import { defineConfig } from "vite"; 
import vue from "@vitejs/plugin-vue"; 
import vueJsx from "@vitejs/plugin-vue-jsx"; 

// 配置对象
export default defineConfig({
  // 插件配置，启用Vue.js和Vue JSX支持
  plugins: [vue(), vueJsx()],

  // 测试配置
  test: {
    globals: true,
    environment: "jsdom",
  },
});
