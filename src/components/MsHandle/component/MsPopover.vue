<template>
  <el-popover v-model:visible="visible" placement="top" :width="160">
    <p>{{ item.warningText || "是否删除内容？" }}</p>
    <div style="text-align: right; margin: 0">
      <el-button size="small" type="text" @click="visible = false"
        >取消</el-button
      >
      <el-button size="small" type="primary" @click="onConfirm(item)"
        >确定</el-button
      >
    </div>
    <template #reference>
      <el-button
        v-show="item.show ?? true"
        @click="visible = true"
        :type="item.type ? item.type : 'text'"
        :disabled="item.disabled"
        :color="item?.color"
      >
        {{ item.label }}</el-button
      >
    </template>
  </el-popover>
</template>

<script setup>
import { ref } from "vue";
const visible = ref(false);

defineProps({
  item: {
    type: Object,
    default: () => {},
  },
});

const emit = defineEmits();

const onConfirm = (item) => {
  visible.value = false;
  emit(item.func);
};
</script>
