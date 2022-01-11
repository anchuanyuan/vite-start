import { createRouter, createWebHistory } from "vue-router"
// import Test from '../components/Test.vue'
import NotFound from "../components/NotFound.vue"

const routes = [
  { path: "/test", component: () => import("../components/Test.vue") },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
})
export default router
