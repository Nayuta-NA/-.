// router/index.js
import { createWebHistory, createRouter } from "vue-router";
import indexViews from "../views/indexViews.vue";
import OverViews from "../views/OverViews.vue";
import Miove from "../views/miove.vue";

const routes = [
  {
    path: "/",
    component: indexViews,
    redirect: "Overview", // 相对路径
    children: [
      { path: "Overview", component: () => import("../views/OverViews.vue") },
      {
        path: "/moive",
        component: () => import("../views/miove.vue"),
      },
      {
        path: "/agc",
        component: () => import("../views/acg.vue"),
      },
      {
        path: "/tvShow",
        component: () => import("../views/tvShow.vue"),
      },
    ],
  },

  {
    path: "/login",
    component: () => import("../login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(), // 修正为 Web 模式
  routes,
});

export default router;
