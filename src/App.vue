<template>
  <el-config-provider :locale="zhCn" size="small">
    <router-view />
  </el-config-provider>
</template>

<script setup>
import { usePreferredDark } from "@vueuse/core";
import { watch } from "vue";
import zhCn from "element-plus/es/locale/lang/zh-cn";

// 系统颜色。可以后续增加store来手动控制
const isDark = usePreferredDark();

watch(isDark, () => {
  setHtmlDark();
});

document.querySelector("html").setAttribute("class", "dark");

const setHtmlDark = () => {
  if (isDark.value) {
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
