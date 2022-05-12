<template>
  <div>
    <div>{{ result }}</div>
    <div>{{ isListening }}</div>
    <button @click="start">开始</button>
    <button @click="stop">停止</button>
    <button @click="speak">播放</button>
  </div>
</template>

<script setup>
import { useSpeechRecognition, useSpeechSynthesis } from "@vueuse/core";

const { isListening, result, start, stop } = useSpeechRecognition({
  lang: "zh_Cn",
  interimResults: true,
  continuous: true,
});

const { speak } = useSpeechSynthesis(result, {
  lang: "zh_Cn",
  pitch: 1,
  rate: 1,
  volume: 1,
});
</script>
