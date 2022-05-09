import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/views/Layout/index.vue";

const routes = [
  {
    path: "/login",
    name: "Login",
    meta: { title: "登录" },
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/404",
    name: "404",
    meta: { title: "404" },
    component: () => import("@/views/404.vue"),
  },
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/home",
        name: "Index",
        meta: { title: "我的项目" },
        component: () => import("@/views/Setting/Index.vue"),
      },
      {
        path: "/page_list",
        name: "PageList",
        meta: { title: "列表页", keepAlive: true },
        component: () => import("@/views/Setting/PageList.vue"),
      },
      {
        path: "/demo",
        name: "Demo",
        meta: { title: "demo" },
        component: () => import("@/views/Setting/Demo.vue"),
      },
    ],
  },
  { path: "/:catchAll(.*)", redirect: "/404" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
