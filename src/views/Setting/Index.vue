<template>
  <!-- <ms-table :column="[]" :data="[]"> </ms-table> -->
  <div class="hello">{{ msg }}</div>
</template>

<script setup>
import { ref } from "vue";

const msg = ref("Home");
</script>

<style scoped lang="scss">
.hello {
  color: red;
}
</style>
