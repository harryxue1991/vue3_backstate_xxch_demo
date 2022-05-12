<script setup lang="ts">
import { ref } from "vue";
import { useInfiniteScroll } from "@vueuse/core";

const el = ref<HTMLElement>(null);
const data = ref([1, 2, 3, 4, 5, 6]);
const moreData = [11, 22, 33];

useInfiniteScroll(
  el,
  () => {
    // load more
    data.value.push(...moreData);
  },
  { distance: 10 }
);
</script>

<template>
  <div>
    <div>无限滚动</div>
    <div class="css" ref="el">
      <div v-for="item in data" :key="item">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<style>
.css {
  height: 100px;
  background-color: palegoldenrod;
  overflow-y: auto;
}
</style>
