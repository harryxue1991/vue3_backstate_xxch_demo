import { ref } from "vue";

const useLoading = (state) => {
  const Loading = ref(state || false);

  const LoadingSetTrue = () => (Loading.value = true);
  const LoadingSetFalse = () => (Loading.value = false);

  return { Loading, LoadingSetTrue, LoadingSetFalse };
};

export default useLoading;
