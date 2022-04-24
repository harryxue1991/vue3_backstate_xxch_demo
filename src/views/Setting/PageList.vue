<template>
  <ms-table
    :columns="columns"
    :currentPage="currentPage"
    :pageSize="pageSize"
    :data="tableData"
    :loading="tableLoading"
    @changePage="changePage"
    @changeSize="changeSize"
    :count="totalPage"
  >
  </ms-table>
</template>

<script setup>
import { resolveComponent } from "vue";
import { GET_LIST } from "@/api/index";
import { ElMessage } from "element-plus";

import userTable from "@/hooks/useTable/index";
const {
  columns,
  tableData,
  tableLoading,
  currentPage,
  pageSize,
  totalPage,
  changePage,
  changeSize,
  getInit,
} = userTable({
  columns: [
    { label: "Id", prop: "id" },
    { label: "内容填充", prop: "endAt" },
    { label: "项目经理", prop: "createUserName" },
    { label: "创建时间", prop: "createTime" },
    {
      label: "操作",
      render: (h, scope) => {
        const msHandle = resolveComponent("ms-handle");
        const items = [
          { label: "编辑", func: "edit" },
          { label: "删除", func: "delete", type: "danger" },
        ];
        return h(msHandle, {
          items,
          onEdit: () => {
            handleEdit(scope);
          },
          onDelete: () => {
            ElMessage({
              message: `删除：${scope.row.endAt}`,
              type: "success",
            });
          },
        });
      },
    },
  ],
  getList: GET_LIST,
});
getInit();

// 编辑
const handleEdit = (scope) => {
  ElMessage({ message: `编辑：${scope.row.endAt}`, type: "success" });
};
</script>

<style scoped lang="scss">
.hello {
  color: red;
}
</style>
