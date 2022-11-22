import { createRouter, createWebHistory } from "vue-router"
// import Home from "../views/Home.vue"
// import About from "../views/About.vue"

const router = createRouter({
  // 指定采用的模式
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" }, // 默认重定向到home
    { 
      name: "home", 
      path: "/home", 
      component: () => import(/* webpackChunkName: 'home' */"../views/Home.vue"),
      meta: {
        name: "xionglp",
        age: 18
      },
      children: [
        { path: "/home", redirect: "/home/recommend" },
        {
          name: "homeRecommend",
          path: "recommend",
          component: () => import("../views/HomeRecommend.vue")
        },
        {
          name: "homeRanking",
          path: "ranking",
          component: () => import("../views/HomeRanking.vue")
        }
      ]
    },
    { 
      name: "about", 
      path: "/about", 
      component: () => import(/* webpackChunkName: 'about' */"../views/About.vue") 
    },
    {
      name: "user",
      path: "/user/:id",
      component: () => import("../views/User.vue")
    },
    {
      name: "login",
      path: "/login",
      component: () => import("../views/Login.vue")
    },
    {
      name: "order",
      path: "/order",
      component: () => import("../views/Order.vue")
    },
    {
      name: "notFound",
      path: "/:pathMatch(.*)",
      component: import("../views/NotFound.vue")
    }
  ]
})

// 动态管理路由
let isAdmin = true
if (isAdmin) {
  router.addRoute({
    path: "/admin",
    component: () => import("../views/Admin.vue")
  })

  router.addRoute("home", {
    path: "vip",
    component: () => import("../views/HomeVip.vue")
  })
}

console.log(router.getRoutes())

// 路由导航守卫: beforeEach 全局前置守卫
router.beforeEach((to, from) => {
  console.log("to: ", to)
  console.log("from: ", from)

  const token = localStorage.getItem("token")
  if (to.path === "/order" && !token) {
    return "/login"
  }

  // return 
  // 返回false 不进行导航， 
  // 不返回或者返回undefined进行默认导航
  // 返回一个路由地址，进行对应导航
})

export default router