<template>
  <div class="hander">
    <template v-for="(item, index) in items">
      <ms-popover
        v-if="item.isPopover"
        :key="index"
        :item="item"
        @[item.func]="onConfirm(item)"
      ></ms-popover>
      <el-button
        v-else
        :key="item"
        :type="item.type ? item.type : 'text'"
        @click="handleClick(item)"
        :disabled="item.disabled"
        v-show="item.show ?? true"
        :color="item?.color"
      >
        {{ item.label }}
      </el-button>
    </template>
  </div>
</template>

<script setup>
import MsPopover from "./component/MsPopover.vue";

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

const onConfirm = (item) => {
  emit(item.func);
};
</script>

<style scoped lang="scss"></style>
