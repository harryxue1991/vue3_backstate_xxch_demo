<template>
  <router-view v-slot="{ Component }">
    <transition>
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

<style lang="scss" scoped>
/* 进入之前和离开后的样式 */
.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
/* 离开和进入过程中的样式 */
.v-enter-active,
.v-leave-active {
  /* 添加过渡动画 */
  transition: all 0.3s;
}
/* 进入之后和离开之前的样式 */
.v-enter-to,
.v-leave-from {
  opacity: 0;
  transform: translateX(30px);
}
</style>
