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
          <mainContent />
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
</style>
