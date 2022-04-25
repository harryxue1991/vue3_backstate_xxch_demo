<template>
  <div class="common-layout">
    <el-container>
      <!-- 头 -->
      <el-header>
        <top-header />
      </el-header>
      <!-- 侧边 -->
      <el-container>
        <el-aside width="200px">
          <sideMenu />
        </el-aside>
        <!-- 主体 -->
        <el-main>
          <!-- 使用后元素需要放一个div里 -->
          <!-- <transition mode="out-in"> -->
          <mainContent />
          <!-- </transition> -->
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import topHeader from "./components/topHeader.vue";
import sideMenu from "./components/sideMenu.vue";
import mainContent from "./components/mainContent.vue";
</script>

<style scoped lang="scss">
:deep(.el-aside) {
  height: calc(100vh - 60px);
  background-color: #545c64;
}
.el-main {
  height: calc(100vh - 60px);
}
/* 进入之前和离开后的样式 */
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
/* 离开和进入过程中的样式 */
.v-enter-active,
.v-leave-active {
  /* 添加过渡动画 */
  transition: opacity 0.5s ease;
}
/* 进入之后和离开之前的样式 */
.v-enter-to,
.v-leave-from {
  opacity: 1;
}
</style>
