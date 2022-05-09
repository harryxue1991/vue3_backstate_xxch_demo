<template>
  <el-config-provider :locale="zhCn" size="small">
    <router-view />
  </el-config-provider>
</template>

<script setup>
import zhCn from "element-plus/es/locale/lang/zh-cn";
import useSettingStore from "@/store/useSettingStore";
import { useDark, useCssVar } from "@vueuse/core";
import { watch, ref } from "vue";
const settingStore = useSettingStore();
// 系统颜色。可以后续增加store来手动控制
watch(
  () => settingStore.isDark,
  () => {
    setHtmlDark();
  }
);

const isDark = useDark();

const el = ref(null);
const color = useCssVar("--theme-bg", el);

const setHtmlDark = () => {
  if (settingStore.isDark) {
    isDark.value = true;
    color.value = "#777777";
  } else {
    isDark.value = false;
    color.value = "#ffffff";
  }
};
setHtmlDark();
</script>

<style lang="scss">
body {
  background-color: $xc-theme-bg;
}
html.dark {
  color-scheme: dark;
}
</style>
