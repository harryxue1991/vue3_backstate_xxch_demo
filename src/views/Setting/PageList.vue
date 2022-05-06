<template>
  <div>
    <ms-search
      v-model:searchParams="searchParams"
      :searchForm="searchForm"
      @onSearch="(currentPage = 1), getInit(searchParams)"
    ></ms-search>
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
  </div>
</template>

<script>
// 使用keep-alive 的 include 的时候用到
export default { name: "PageList" };
</script>

<script setup>
import { resolveComponent } from "vue";
import { GET_LIST } from "@/api";
import { ElMessage } from "element-plus";

// 引入hooks
import useSearch from "@/hooks/useSearch";
import userTable from "@/hooks/useTable";

// search 内容
const { searchParams, searchForm } = useSearch({
  searchParams: {},
  searchForm: [
    { component: "el-input", label: "内容填充", key: "endAt" },
    {
      component: "el-select",
      label: "状态",
      key: "status",
      componentChild: [
        { component: "el-option", value: "1", label: "正常" },
        { component: "el-option", value: "2", label: "非正常" },
      ],
    },
    {
      component: "el-date-picker",
      label: "时间",
      key: "time",
      options: {
        valueFormat: "YYYY-MM-DD",
      },
    },
    {
      component: "sh-custom",
      label: "自定义",
      key: "custom",
    },
  ],
});

// table 内容
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
  searchParams: searchParams,
});

// hooks暴露出来的获取页面列表方法
getInit();
// 编辑功能demo
const handleEdit = (scope) => {
  ElMessage({ message: `编辑：${scope.row.endAt}`, type: "success" });
};
</script>

<style scoped lang="scss">
.hello {
  color: red;
}
</style>
