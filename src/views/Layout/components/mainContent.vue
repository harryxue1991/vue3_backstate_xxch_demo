<template>
  <router-view v-slot="{ Component }">
    <transition name="el-fade-in">
      <keep-alive :max="10" :include="include" :exclude="exclude">
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<script setup>
import useSettingStore from "@/store/useSettingStore";
const { include, exclude } = useSettingStore();
</script>

<style lang="scss" scoped></style>
