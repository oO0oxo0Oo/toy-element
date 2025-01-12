// 导入 @toy-element/components 库中的 ErButton 组件
import {
  ErButton, 
  ErButtonGroup, 
  ErIcon, 
  ErCollapse,
  ErCollapseItem,
  ErAlert,
  ErTooltip,
} from "../components";
import type { Plugin } from "vue";

//类型声明为 Vue 插件数组
export default [
  ErButton, 
  ErButtonGroup, 
  ErIcon, 
  ErCollapse,
  ErCollapseItem,
  ErAlert,
  ErTooltip,
] as Plugin[];