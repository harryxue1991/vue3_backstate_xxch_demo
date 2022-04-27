import router from "./index";

import NProgress from "nprogress"; // Progress 进度条
import "nprogress/nprogress.css"; // Progress 进度条样式

import { useLoginStore } from "@/store";
import useSettingStore from "@/store/useSettingStore";

NProgress.configure({
  showSpinner: false,
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  const { token } = useLoginStore();
  const { setInclude, setExclude } = useSettingStore();

  document.title = `${to.meta.title}`;
  if (to.meta.keepAlive) {
    setInclude(to.name);
  } else {
    setExclude(to.name);
  }
  if (!token && to.path !== "/login") {
    next("/login");
  } else {
    // let roles = getSession("user_info").roles;
    // if() {

    // }
    next();
  }
});

router.afterEach(() => {
  NProgress.done(); // 结束Progress
});
