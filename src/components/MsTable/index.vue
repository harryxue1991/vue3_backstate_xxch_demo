<template>
  <div class="table-wrap">
    <el-table
      :header-cell-style="{
        backgroundColor: 'rgb(242, 242, 242)',
        color: '#333333',
      }"
      :data="data"
      border
      v-loading="loading"
      element-loading-text="拼命加载中"
      fit
      stripe
      :span-method="spanMethod"
      highlight-current-row
      ref="table"
      @selection-change="handleSelectionChange"
      @sort-change="handleSortChange"
    >
      <!-- 序号 -->
      <el-table-column
        :label="serialName"
        type="index"
        width="50"
        v-if="serial"
      >
      </el-table-column>
      <!-- table选择 -->
      <el-table-column
        v-if="selection"
        align="center"
        type="selection"
        :selectable="checkSelectable"
        width="55"
      ></el-table-column>
      <el-table-column
        :prop="item.prop"
        :label="item.label"
        :sortable="item.sortable"
        align="center"
        :width="item.width"
        min-width="70px"
        v-for="(item, index) in columns"
        :key="index"
        :show-overflow-tooltip="item.tooltip"
        :fixed="item.fixed ? item.fixed : false"
      >
        <template v-if="item.header" #header>
          <span>{{ item.label }}</span>
        </template>
        <template #default="scope">
          <ms-render
            v-if="item.render"
            :scope="scope"
            :render="item.render"
          ></ms-render>
          <span v-else>{{ scope.row[item.prop] }}</span>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <div class="p_page" v-if="hasPage">
      <el-pagination
        small="small"
        @size-change="changeSize"
        @current-change="changePage"
        :current-page="currentPage"
        :page-sizes="[10, 40, 100]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="count"
      ></el-pagination>
    </div>
  </div>
</template>

<script setup>
defineProps({
  columns: {
    type: Array,
  },
  data: {
    type: Array,
  },
  spanMethod: {
    type: Function,
  },
  serialName: {
    type: String,
    default: "序号",
  },
  serial: {
    type: Boolean,
    default: false,
  },
  border: {
    type: Boolean,
    default: true,
  },
  stripe: {
    type: Boolean,
    default: true,
  },
  fit: {
    type: Boolean,
    default: true,
  },
  highlightCurrentRow: {
    type: Boolean,
    default: true,
  },
  selection: {
    type: Boolean,
    default: false,
  },

  currentPage: {
    type: Number,
    default: 1,
  },
  hasPage: {
    type: Boolean,
    default: true,
  },
  pageSize: {
    type: Number,
    default: 10,
  },
  count: {
    type: Number,
    default: 0,
  },
  loading: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits();

// table
const checkSelectable = (row) => {
  return !row.isSelectable;
};
const handleSelectionChange = (val) => {
  emit("handleSelectionChange", val);
};
const handleSortChange = (val) => {
  emit("handleSortChange", val);
};

// page
const changeSize = (val) => {
  emit("changeSize", val);
};
const changePage = (val) => {
  emit("changePage", val);
  emit("update:currentPage", val);
};
</script>

<style lang="scss" scoped>
.table-wrap {
  margin-bottom: 20px;
}
.p_page {
  text-align: center;
  margin: 10px 0;
}
:deep(.el-table td, .el-table th) {
  text-align: center;
}
</style>
