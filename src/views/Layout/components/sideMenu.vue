<template>
  <el-menu
    active-text-color="#0099ff"
    background-color="#545c64"
    :default-active="route.path"
    :default-openeds="[0]"
    router
    text-color="#fff"
  >
    <el-sub-menu
      :index="item.menuChineseName"
      v-for="(item, index) in routerJosn"
      :key="index"
    >
      <template #title>
        <el-icon><Setting /></el-icon>
        <span>{{ item.menuChineseName }}</span>
      </template>
      <el-menu-item
        :index="val.menuRoute"
        :disabled="val.disable"
        v-for="(val, i) in item.child"
        :key="i"
        >{{ val.menuChineseName }}</el-menu-item
      >
    </el-sub-menu>
    <!-- <el-menu-item index="2">
      <el-icon><icon-menu /></el-icon>
      <span>小彩蛋</span>
    </el-menu-item> -->
  </el-menu>
</template>

<script setup>
import routerJosn from "./router.json";
import { Setting } from "@element-plus/icons-vue";
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<style lang="scss" scoped></style>
