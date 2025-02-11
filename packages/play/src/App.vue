<script setup lang="ts">
import {reactive} from 'vue';

const form = reactive({
  name: "",
  docs: "",
});
</script>

<template>name
  <er-input v-model="form.name" show-password type="password"/>
  <er-input v-model="form.docs" type="textarea"/>
</template>