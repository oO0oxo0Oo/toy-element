/**
 * 定义一个 InjectionKey 类型常量，用于在 Vue 3 中提供对 ButtonGroupContext 的依赖注入。
 * InjectionKey 是 Vue 3 提供的一种类型，用于标注和注入组合式 API 中的 provide 和 inject。
 * 
 * @type {InjectionKey<ButtonGroupContext>} BUTTON_GROUP_CTX_KEY - 用于标识 ButtonGroupContext 的注入键。
 */
import type { InjectionKey } from "vue";
import type { ButtonGroupContext } from "./types";

// 使用 Symbol 创建一个唯一的 InjectionKey，用于在组件之间共享 ButtonGroupContext 数据
export const BUTTON_GROUP_CTX_KEY: InjectionKey<ButtonGroupContext> =
  Symbol("buttonGroupContext");