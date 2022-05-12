<template>
  <div>
    点击外面区域：
    <div ref="target">Hello world</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";

const target = ref(null);

onClickOutside(target, (event) => console.log(event));
</script>
