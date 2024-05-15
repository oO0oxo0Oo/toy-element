/**
 * vite.config.js
 * 
 * 主Vite配置文件，用于定义项目构建和开发环境的设置。
 * 包含了Vue.js和Vue JSX的支持，以及Vitest测试框架的配置。
 *
 * @author Your Name
 * @since [配置文件创建日期，例如 2023-03-09]
 * @see https://vitejs.dev/config/ 查看Vite配置选项的官方文档
 */

/// <reference types="vitest" /> // 引入Vitest类型定义，增强IDE的代码提示和类型检查

import { defineConfig } from "vite"; // 导入Vite的配置函数
import vue from "@vitejs/plugin-vue"; // 引入Vue.js插件
import vueJsx from "@vitejs/plugin-vue-jsx"; // 引入Vue JSX插件支持

// 配置对象
export default defineConfig({
  // 插件配置，启用Vue.js和Vue JSX支持
  plugins: [vue(), vueJsx()],

  // 测试配置
  test: {
    // 允许在测试中使用全局变量
    globals: true,

    // 使用jsdom作为测试环境，模拟浏览器环境进行单元测试
    environment: "jsdom",
  },
});