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
      name: "notFound",
      path: "/:pathMatch(.*)",
      component: import("../views/NotFound.vue")
    }
  ]
})

export default router