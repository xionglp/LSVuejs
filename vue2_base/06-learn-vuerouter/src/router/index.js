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
    path: "/login",
    component: () => import("../pages/Login.vue"),
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

// 导航守卫
// 不同返回值做的操作：
// 1、false： 不进行导航
// 2、undefined或者不写返回值则进行默认导航
// 3、字符串： 路径，跳转到对应的路径中
// 4、对象 类似于router.push({path: "/login", query: {name: xionglp...}})
router.beforeEach((to) => {
  console.log(to);
  if (to.path !== "/login") {
    const token = window.localStorage.getItem("token");
    if (!token) {
      return "/login"
    }
  }
})

export default router;