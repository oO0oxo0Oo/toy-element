<script setup lang="ts">
import { ref } from "vue";
import { ErSwitch } from "toy-element"; 

// 示例数据
const basicValue = ref(false);
const textValue = ref(false);
const disabledValue = ref(true);
const sizeValue = ref(false);
const customValue = ref("inactive");
</script>

<template>
  <div class="switch-example">
    <h2>ErSwitch 示例</h2>

    <!-- 基础用法 -->
    <div class="example-item">
      <h3>基础开关</h3>
      <ErSwitch v-model="basicValue" />
      <p>当前值：{{ basicValue }}</p>
    </div>

    <!-- 带文本的开关 -->
    <div class="example-item">
      <h3>带文本的开关</h3>
      <ErSwitch
        v-model="textValue"
        active-text="开"
        inactive-text="关"
      />
      <p>当前值：{{ textValue }}</p>
    </div>

    <!-- 禁用状态 -->
    <div class="example-item">
      <h3>禁用状态</h3>
      <ErSwitch
        v-model="disabledValue"
        disabled
        active-text="开"
        inactive-text="关"
      />
      <p>当前值：{{ disabledValue }}</p>
    </div>

    <!-- 不同尺寸 -->
    <div class="example-item">
      <h3>不同尺寸</h3>
      <ErSwitch v-model="sizeValue" size="small" />
      <ErSwitch v-model="sizeValue" size="large" />
      <p>当前值：{{ sizeValue }}</p>
    </div>

    <!-- 自定义值 -->
    <div class="example-item">
      <h3>自定义值</h3>
      <ErSwitch
        v-model="customValue"
        active-value="active"
        inactive-value="inactive"
      />
      <p>当前值：{{ customValue }}</p>
    </div>
  </div>
</template>

<style scoped>
.switch-example {
  margin: 20px;
}

.example-item {
  margin-bottom: 20px;
}

.example-item h3 {
  margin: 0 0 10px;
}

p {
  margin: 10px 0;
}
</style>
