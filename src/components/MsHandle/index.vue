<template>
  <div class="ms-handel-btn">
    <template v-for="(item, index) in items">
      <el-button
        :type="type"
        :key="index"
        @click="handleClick(item.func)"
        v-if="item.show"
        :disabled="item.disabled"
        :style="{ color: item.color ? item.color : '' }"
      >
        <span v-text="item.label"></span>
      </el-button>
    </template>
  </div>
</template>

<script>
export default {
  name: "ms-handle",
  props: {
    items: Array,
    type: {
      default: "text",
      type: String,
    },
  },
  setup(props, { emit }) {
    const handleClick = (item) => {
      emit(item.func, item.uuid);
    };
    return {
      handleClick,
    };
  },
};
</script>
