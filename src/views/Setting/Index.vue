<template>
  <!-- <ms-table :column="[]" :data="[]"> </ms-table> -->
  <div>
    <div class="hello">{{ msg }}</div>

    <div>
      <div>鼠标位置：{{ x }} {{ y }}</div>
    </div>

    <el-button class="btn">修改按钮颜色</el-button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useMouse } from "@vueuse/core";

// tracks mouse position
const { x, y } = useMouse();

const msg = ref("Hello World");
</script>

<style scoped lang="scss">
.hello {
  color: $xc-color-primary;
  cursor: pointer;
  &:hover {
    color: $xc-color-success;
  }
}

.btn {
  --el-button-bg-color: #0099ff;
  --el-button-text-color: #ffffff;
}
</style>
