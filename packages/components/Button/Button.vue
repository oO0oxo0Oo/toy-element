<script setup lang="ts">
import {ref} from 'vue';
import type { ButtonProps } from './types';
defineOptions({ 
  //设置组件的名称为 'ErButton'。
  name: 'ErButton'
   })

 //使用默认属性定义一个按钮组件的props。
const props = withDefaults(defineProps<ButtonProps>(), {
  tag: "button", // 默认使用button标签
  nativeType: "button", // 默认的HTML类型为button
});

   // 定义组件的插槽
  const slots = defineSlots()

  // 创建一个对HTMLButtonElement的引用
  const _ref =ref<HTMLButtonElement>()
</script>

<template>
  <component
    :is="props.tag"
    ref="_ref"
    class="er-button"
    :type="tag === 'button' ? nativeType : void 0"
    :disabled="disabled ||loading ? true : void 0"
    :class="{
      [`er-button--${type}`]: type,
      [`er-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading
    }"
  >
    <slot></slot>
  </component>
</template>