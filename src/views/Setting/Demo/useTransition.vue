<template>
  <div>
    hello {{ output.toFixed(2) }}

    <button @click="resume">1212122</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { TransitionPresets, useTransition } from "@vueuse/core";

const source = ref(0);

const output = useTransition(source, {
  duration: 1000,
  transition: TransitionPresets.easeInOutCubic,
});

const resume = () => {
  source.value = 1000;
};
</script>
