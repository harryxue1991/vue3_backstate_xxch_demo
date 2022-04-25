<template>
  <div @click="set">点击赋值</div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
  },
});
const emit = defineEmits();

const set = () => {
  emit("update: modelValue", "一个自定义内容");
};
</script>
