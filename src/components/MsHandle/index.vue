<template>
  <div>
    <el-button
      v-for="(item, index) in filterItems"
      :key="index"
      :type="item.type ? item.type : 'text'"
      @click="handleClick(item)"
      :disabled="item.disabled"
      :color="item?.color"
    >
      <span v-text="item.label"></span>
    </el-button>
  </div>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
});

// 过滤掉不显示的，默认undefined显示
const filterItems = computed(() =>
  props.items.filter((i) => i.show === undefined || i.show)
);

// emit触发事件
const emit = defineEmits();
const handleClick = (item) => {
  emit(item.func);
};
</script>
