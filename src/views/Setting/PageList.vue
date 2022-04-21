<template>
  <ms-table :columns="state.columns" :data="state.list"> </ms-table>
</template>

<script setup>
import { onMounted, reactive } from "vue";
import { GET_LIST } from "@/api/index";

const state = reactive({
  columns: [
    { label: "项目名称", prop: "title" },
    { label: "项目期限", prop: "endAt" },
    { label: "项目经理", prop: "createUserName" },
    { label: "创建时间", prop: "createTime" },
  ],
  list: [],
});

onMounted(() => {
  init();
});

const init = async () => {
  const res = await GET_LIST();
  state.list.push(...res.data);
};
</script>

<style scoped lang="scss">
.hello {
  color: red;
}
</style>
