<template>
  <div class="top">
    <div class="icon">
      <img src="@/assets/logo.png" alt="" />
    </div>
    <div class="top-user">
      <span class="time">上次登录时间：2022.04.29</span>
      <el-dropdown
        trigger="click"
        size="medium"
        @command="drop_command"
        class="top-user-drop"
      >
        <span class="el-dropdown-link">
          <img class="own-icon" src="@/assets/headers.png" alt="" />
          <span class="own">{{ userInfo.name }}</span>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="LogOut">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
// import { ref } from "vue";
import { ElMessageBox } from "element-plus";
import { useRouter } from "vue-router";
import { useLoginStore } from "@/store";

const router = useRouter();
const { userInfo } = useLoginStore();

const drop_command = () => {
  ElMessageBox.confirm(`确认退出平台？`, {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  }).then(async () => {
    // 自己补充退出逻辑
    router.push("/login");
  });
};
</script>

<style lang="scss" scoped>
.top {
  border-bottom: 1px solid #eeeeee;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  .icon {
    height: 48px;
    line-height: 52px;
    padding: 0 10px;
    font-size: 24px;
    cursor: pointer;
    display: inline-block;
    img {
      width: 60px;
      height: 60px;
    }
  }
  .top-user {
    position: absolute;
    top: 0;
    right: 30px;
    height: 60px;
    line-height: 60px;
    .top-user-drop {
      height: 60px;
      line-height: 60px;
      margin: 0 10px;
    }
  }
  .time {
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;
    padding-right: 18px;
    border-right: 1px solid #979797;
  }
  .own-icon {
    width: 24px;
    height: 24px;
    margin: 0 8px 0 18px;
    transform: translateY(6px);
  }
  .own {
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
  }
}
</style>
