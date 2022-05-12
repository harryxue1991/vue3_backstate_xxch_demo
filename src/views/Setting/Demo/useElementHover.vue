<script setup>
import { ref } from "vue";
import { useElementHover } from "@vueuse/core";

const myHoverableElement = ref();
const isHovered = useElementHover(myHoverableElement);
console.log(isHovered);
</script>

<template>
  hover：
  <div ref="myHoverableElement">
    {{ isHovered ? "哈哈" : "你好" }}
  </div>
</template>
