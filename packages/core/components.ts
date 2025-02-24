// 导入 @toy-element/components 库中的 ErButton 组件
import {
  ErButton, 
  ErButtonGroup, 
  ErIcon, 
  ErCollapse,
  ErCollapseItem,
  ErAlert,
  ErTooltip,
  ErPopconfirm,
  ErDropdown,
  ErDropdownItem,
  ErMessage,
  ErNotification,
  ErInput,
  ErMessageBox,
  ErLoading,
  ErSwitch,
  ErSelect,
  ErOption,
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
  ErPopconfirm,
  ErDropdown,
  ErDropdownItem,
  ErMessage,
  ErNotification,
  ErInput,
  ErMessageBox,
  ErLoading,
  ErSwitch,
  ErSelect,
  ErOption,
] as Plugin[];