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
    }
  },
  {
    name: "about",
    path: "/about",
    component: () => import(/*webpackChunkName: "about-chunk" */ "../pages/About.vue")
  },
]

// 创建一个路由对象
const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router;