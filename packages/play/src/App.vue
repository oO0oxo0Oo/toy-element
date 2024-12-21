<script setup lang="ts">
import { ref } from 'vue';
const selectedItem = ref('a'); // 默认展开第一个项

const handleClick = () => {
  // 点击按钮时切换展开项
  if (selectedItem.value === 'a') {
    selectedItem.value = 'b';
  } else {
    selectedItem.value = 'a';
  }
};
</script>

<template>
   <er-button type="primary" size="small" @click="handleClick">Toggle Collapse</er-button>
  <er-collapse v-model="selectedItem">
    <er-collapse-item name="a" title="Title a">
      <div>this is content a</div>
    </er-collapse-item>
    <er-collapse-item name="b" title="Title b">
      <div>this is content b</div>
    </er-collapse-item>
    <er-collapse-item name="c" title="Title c" disabled>
      <div>this is content c</div>
    </er-collapse-item>
  </er-collapse>
</template>

