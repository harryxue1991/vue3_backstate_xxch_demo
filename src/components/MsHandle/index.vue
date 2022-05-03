<template>
  <div>
    <el-button
      v-for="(item, index) in items"
      :key="index"
      :type="item.type ? item.type : 'text'"
      @click="handleClick(item)"
      :disabled="item.disabled"
      v-show="item.show ?? true"
      :color="item?.color"
    >
      <span v-text="item.label"></span>
    </el-button>
  </div>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    default: () => [],
  },
});

// emit触发事件
const emit = defineEmits();
const handleClick = (item) => {
  emit(item.func);
};
</script>
