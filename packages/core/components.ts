// 导入 @toy-element/components 库中的 ErButton 组件
import { ErButton, ErIcon } from "@toy-element/components";

// 导入 Vue 中的 Plugin 类型定义
import type { Plugin } from "vue";

// 将 ErButton 组件作为单一元素的数组导出，类型声明为 Vue 插件数组
export default [ErButton, ErIcon] as Plugin[];