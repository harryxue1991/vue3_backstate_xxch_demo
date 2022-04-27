<template>
  <el-form :inline="true" :model="searchParams">
    <el-row :gutter="20">
      <el-col :span="20">
        <el-form-item
          :label="item.label"
          v-for="(item, index) in searchForm"
          :key="index"
        >
          <component
            :is="item.component"
            v-model="searchParams[item.key]"
            :placeholder="item.placeholder || `请填写${item.label}`"
            :value-format="item.valueFormat"
          >
            <template v-if="item.componentChild && item.componentChild.length">
              <component
                v-for="(val, i) in item.componentChild"
                :is="val.component"
                :value="val.value"
                :label="val.label"
                :key="i"
              ></component>
            </template>
          </component>
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item>
          <el-button type="danger" @click="onReset">重置</el-button>
          <el-button type="primary" @click="onSubmit">搜索</el-button>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
import ShCustom from "./component/sh-custom.vue";
export default {
  components: {
    ShCustom,
  },
};
</script>

<script setup>
const props = defineProps({
  searchForm: {
    type: Array,
    default: () => {
      return [];
    },
  },
  searchParams: {
    type: Object,
    default: () => {
      return {};
    },
  },
});

const emit = defineEmits();

const onSubmit = () => {
  emit("onSearch");
};

const onReset = () => {
  for (const key in props.searchParams) {
    if (Object.hasOwnProperty.call(props.searchParams, key)) {
      props.searchParams[key] = "";
    }
  }
  emit("onSearch");
};
</script>

<style lang="scss" scoped></style>
