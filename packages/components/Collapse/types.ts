import type { Ref } from "vue";

// 定义Collapse组件的项名称类型，可以是字符串或数字
export type CollapseItemName = string | number;

// 定义Collapse组件的属性接口
export interface CollapseProps {
  // 指定当前展开的项的名称数组
  modelValue: CollapseItemName[];
  // 是否开启手风琴模式，只允许一个项展开
  accordion?: boolean;
}

// 定义CollapseItem组件的属性接口
export interface CollapseItemProps {
  // 指定项的唯一名称
  name: CollapseItemName;
  // 指定项的标题
  title?: string;
  // 是否禁用该项
  disabled?: boolean;
}

// 定义Collapse组件的上下文接口，提供给CollapseItem使用
export interface CollapseContext {
  // 指定当前展开的项的名称数组的Ref
  activeNames: Ref<CollapseItemName[]>;
  // 当项被点击时的处理函数
  handleItemClick(name: CollapseItemName): void;
}

// 定义Collapse组件的发射事件类型
export interface CollapseEmits {
  // 当更新modelValue时触发的事件
  (e: "update:modelValue", value: CollapseItemName[]): void;
  // 当展开状态改变时触发的事件
  (e: "change", value: CollapseItemName[]): void;
}