<template>
  <div @click="set" class="set">点击赋值</div>
</template>

<script setup>
import { ElMessage } from "element-plus";

defineProps({
  modelValue: {
    type: String,
    default: "",
  },
});
const emit = defineEmits();

const set = () => {
  ElMessage({
    message: `自定义赋值成功`,
    type: "success",
  });
  emit("update:modelValue", "可根据demo组件自己发挥");
};
</script>

<style scoped lang="scss">
.set {
  cursor: pointer;
}
</style>
