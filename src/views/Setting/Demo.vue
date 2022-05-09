<script setup>
import { useWebNotification } from "@vueuse/core";
const options = {
  title: "你好2",
  dir: "auto",
  lang: "en",
  renotify: true,
  tag: "test",
};
const { isSupported, show } = useWebNotification(options);
</script>

<template>
  <div>
    <p>Supported: <BooleanDisplay :value="isSupported" /></p>
  </div>

  <div v-if="isSupported">
    <button @click="show()">Show Notification</button>
  </div>
  <div v-else>The Notification Web API is not supported in your browser.</div>
</template>
