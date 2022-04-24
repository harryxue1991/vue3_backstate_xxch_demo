import { ref, reactive, toRefs } from "vue";

const useTable = ({ columns, getList }) => {
  const currentPage = ref(1);
  const pageSize = ref(10);
  const totalPage = ref(0);
  const tableLoading = ref(false);

  const state = reactive({
    columns: [...columns],
    tableData: [],
  });

  const changePage = (val) => {
    currentPage.value = val;
    getInit();
  };
  const changeSize = (val) => {
    pageSize.value = val;
    getInit();
  };

  const getInit = async () => {
    tableLoading.value = true;
    try {
      const res = await getList();
      tableLoading.value = false;
      totalPage.value = res.total;
      state.tableData = res.data;
    } catch {
      tableLoading.value = false;
    }
  };

  return {
    ...toRefs(state),
    tableLoading,
    currentPage,
    pageSize,
    totalPage,
    changePage,
    changeSize,
    getInit,
  };
};

export default useTable;
