import { createRouter, createWebHashHistory } from 'vue-router'
import routerMenu from "@/router/router"
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: routerMenu,
  scrollBehavior() {
    // to, from, savedPosition
    createWebHashHistory
    return { top: 0 }
  }
})

export default router
