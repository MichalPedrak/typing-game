import { createRouter, createWebHistory } from "vue-router";
import TypingView from "../views/TypingView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: TypingView,
    },
    {
      path: "/ranking",
      name: "ranking",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/RankingView.vue"),
    },
  ],
});

export default router;
