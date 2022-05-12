<template>
  <div>
    hello {{ counter }}
    <button @click="pause">暂停</button>
    <button @click="resume">继续</button>
    <button @click="pauseE">定时器状态{{ state }}</button>
    <button @click="resumeE">定时器状态{{ state }}</button>
  </div>
</template>

<script setup>
import { useInterval, useIntervalFn } from "@vueuse/core";
import { ref } from "vue";

// count will increase every 200ms
// const counter = useInterval(200);
// console.log(counter);
const { counter, pause, resume } = useInterval(1000, { controls: true });

const state = ref(4);
const { pause: pauseE, resume: resumeE } = useIntervalFn(() => {
  state.value -= 1;
  if (state.value <= 0) {
    state.value = "倒计时开始";
    pauseE();
  }
  /* your function */
}, 1000);
</script>
