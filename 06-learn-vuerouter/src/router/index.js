import { createRouter, createWebHistory } from "vue-router";

// import Home from "../pages/Home.vue";
// import About from "../pages/About.vue";

// 配置映射关系
const routes = [
  {
    path: "",
    redirect: "/home", // 重定向
  },
  {
    name: "home",
    path: "/home",
    component: () => import(/*webpackChunkName: "home-chunk" */ "../pages/Home.vue"), // 路由懒加载
    meta: {
      name: "xionglp",
      id: 1001,
    },
    children: [
      {
        path: "",
        component: () => import("../pages/HomeMessage.vue"),
      },
      {
        path: "message",
        component: () => import("../pages/HomeMessage.vue"),
      },
      {
        path: "product",
        component: () => import("../pages/HomeProduct.vue"),
      }
    ]
  },
  {
    name: "about",
    path: "/about",
    component: () => import(/*webpackChunkName: "about-chunk" */ "../pages/About.vue")
  },
  {
    name: "user",
    path: "/user/:username/:id",
    component: () => import("../pages/User.vue"),
  },
  {
    path: "/:pathMatch(.*)",
    component: () => import("../pages/NotFound.vue"),
  },
]

// 创建一个路由对象
const router = createRouter({
  routes,
  history: createWebHistory()
})

// 动态添加路由
const categoryRoute = {
  path: "/category",
  component: () => import("../pages/Category.vue"),
}
router.addRoute(categoryRoute);

router.addRoute("home", {
  path: "moment",
  component: () => import("../pages/HomeMoment.vue"),
})

export default router;