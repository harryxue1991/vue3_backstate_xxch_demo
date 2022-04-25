import { ref, reactive, toRefs } from "vue";

const useTable = ({ columns, getList, searchParams }) => {
  const currentPage = ref(1);
  const pageSize = ref(10);
  const totalPage = ref(0);
  const tableLoading = ref(false);
  const state = reactive({
    columns: [...columns],
    tableData: [],
    searchParams: { ...searchParams },
  });
  //   翻页方法
  const changePage = (val) => {
    currentPage.value = val;
    getInit();
  };
  const changeSize = (val) => {
    pageSize.value = val;
    getInit();
  };
  //   数据请求方法
  const getInit = async (obj) => {
    tableLoading.value = true;
    try {
      const res = await getList({
        page: currentPage.value,
        per: pageSize.value,
        ...obj,
      });
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
