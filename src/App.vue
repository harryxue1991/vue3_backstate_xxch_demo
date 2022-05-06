<template>
  <el-config-provider :locale="zhCn" size="small">
    <router-view />
  </el-config-provider>
</template>

<script setup>
import zhCn from "element-plus/es/locale/lang/zh-cn";
import useSettingStore from "@/store/useSettingStore";
import { watch } from "vue";
const settingStore = useSettingStore();
// 系统颜色。可以后续增加store来手动控制
watch(
  () => settingStore.isDark,
  () => {
    setHtmlDark();
  }
);

const setHtmlDark = () => {
  if (settingStore.isDark) {
    document.querySelector("html").setAttribute("class", "dark");
    document
      .getElementsByTagName("body")[0]
      .style.setProperty("--theme-bg", "#777777");
  } else {
    document.querySelector("html").setAttribute("class", "");
    document
      .getElementsByTagName("body")[0]
      .style.setProperty("--theme-bg", "#ffffff");
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
