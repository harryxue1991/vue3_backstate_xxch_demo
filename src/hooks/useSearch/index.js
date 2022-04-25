import { reactive, toRefs } from "vue";

const useSearch = ({ searchParams, searchForm }) => {
  const state = reactive({
    searchForm: [...searchForm],
    searchParams: { ...searchParams },
  });

  return {
    ...toRefs(state),
  };
};

export default useSearch;
