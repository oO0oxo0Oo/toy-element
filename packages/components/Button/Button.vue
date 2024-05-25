<script setup lang="ts">
import { ref,computed,inject } from 'vue';
import type { ButtonProps, ButtonInstance, ButtonEmits } from './types';
import { throttle } from 'lodash-es'
import  ErIcon  from '../Icon/Icon.vue';
import { BUTTON_GROUP_CTX_KEY } from './constants';

defineOptions({
  //设置组件的名称为 'ErButton'。
  name: 'ErButton'
})

//使用默认属性定义一个按钮组件的props。
const props = withDefaults(defineProps<ButtonProps>(), {
  tag: "button", // 默认使用button标签
  nativeType: "button", // 默认的HTML类型为button
  useThrottle: true,
  throttleDuration: 500
});

const emits = defineEmits<ButtonEmits>()

// 定义组件的插槽
const slots = defineSlots()

const ctx=inject(BUTTON_GROUP_CTX_KEY, void 0)

// 创建一个对HTMLButtonElement的引用
const _ref = ref<HTMLButtonElement>()

const size=computed(()=>{
  // 通过条件运算符优先从ctx中获取size值，如果ctx不存在或未定义size，则从props中获取size值，最后默认为空字符串
  return ctx?.size ?? props?.size ?? ""
})
const type=computed(()=>{
  return ctx?.type ?? props?.type ?? ""
})
const disabled=computed(()=>{
  return ctx?.disabled || props?.disabled || false
})

const iconStyle =computed(()=>{
  marginRight: slots.default ? "6px" : "0px"
})

const handleBtnClick = (e: MouseEvent) => emits("click", e)
const handleBtnClickThrottle = throttle(handleBtnClick, props.throttleDuration ,{trailing : false} )


defineExpose<ButtonInstance>({
  // 获取组件的ref
  ref: _ref,
})
</script>

<template>
  <component :is="tag" :autofocus="autofocus" ref="_ref" class="er-button" :type="tag === 'button' ? nativeType : void 0"
    :disabled="disabled || loading ? true : void 0" :class="{
      [`er-button--${type}`]: type,
      [`er-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading,
    }" @click="(e: MouseEvent) => useThrottle ? handleBtnClickThrottle(e) : handleBtnClick(e)"
    >
       <!-- 当组件的loading属性为true时，显示加载状态的模板 -->
    <template v-if="loading">
      <!-- 使用名为"loading"的插槽来定义加载时的显示内容，默认为一个旋转的图标 -->
      <slot name="loading">
                <!--
          使用`er-icon`组件来展示一个加载中的图标。
          `class="loading-icon"` 为图标指定了一个名为 loading-icon 的 CSS 类，可用于自定义样式。
          `:icon` 属性绑定的是 `loadingIcon` 数据，如果 `loadingIcon` 未定义，则默认使用 'spinner' 作为图标名称。
          `:style` 属性绑定的是 `iconStyle` 对象，可用于应用额外的样式到图标上。
          `spin` 属性指示图标应该旋转，用于创建动画效果。
        -->
        <er-icon
          class="loading-icon" :icon="loadingIcon ?? 'spinner'" :style="iconStyle" size="1x" spin
        />
      </slot>
    </template>
    <er-icon
    v-if="icon && !loading"
    :icon="icon"
    size="1x"
    :style="iconStyle"
    />

    <slot></slot>
  </component>
</template>

<style scoped>
@import './style.css'
</style>