export const constantRoute = [
  {
    //登录路由
    path: "/login",
    component: () => import("../views/login/index.vue"),
    name: "login", //命名路由
  },
  //成功路由
  {
    path: "/",
    component: () => import("../views/home/index.vue"),
    name: "home", //命名路由
  },

  {
    path: "/404",
    component: () => import("../views/404/index.vue"),
    name: "404", //命名路由
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
    name: "any", //命名路由
  },
];
