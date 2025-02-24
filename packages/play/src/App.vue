<script setup lang="ts">
import { ref } from 'vue';

const options = ref([
  { value: '选项1', label: '黄金糕' },
  { value: '选项2', label: '双皮奶' },
  { value: '选项3', label: '蚵仔煎' },
  { value: '选项4', label: '龙须面' , disabled: true },
  { value: '选项5', label: '北京烤鸭' },
]);
const value = ref('');
</script>

<template>
<er-select v-model="value" fliterable placeholder="请选择" clearable> 
  <er-option value="选项1" label="黄金糕" />
  <er-option value="选项2" label="双皮奶" />
  <er-option value="选项3" label="蚵仔煎" />
  <er-option value="选项4" label="龙须面" disabled />
  <er-option value="选项5" label="北京烤鸭" />
</er-select>
</template>

