<script setup>
import { ref } from "vue";
import { useToggle, useDebounceFn } from "@vueuse/core";

const [value, toggle] = useToggle();
console.log(value);
const inputs = ref("");
const hello = ref("");
const setValue = useDebounceFn(
  () => {
    console.log(`搜索：${inputs.value}`);
  },
  500,
  { maxWait: 5000 }
);
</script>

<template>
  <div class="abc" @click="toggle()">
    <div>{{ hello }}</div>
    <div>
      <input type="text" v-model="inputs" @input="setValue" />
    </div>
  </div>
</template>
