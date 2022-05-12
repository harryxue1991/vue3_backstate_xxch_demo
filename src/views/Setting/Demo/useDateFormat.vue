<script setup>
import { useNow, useDateFormat } from "@vueuse/core";

const formatted = useDateFormat(useNow(), "YYYY-MM-DD HH:mm:ss");
</script>

<template>
  <div>{{ formatted }}</div>
</template>
