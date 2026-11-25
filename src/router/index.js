import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/local-stem-experts",
      name: "experts",
      component: () => import("../views/LocalStemExpertsView.vue"),
    },
    {
      path: "/science-around-us",
      name: "science",
      component: () => import("../views/ScienceAroundUsView.vue"),
    },
    {
      path: "/local-stem-experts-test",
      name: "experts-test",
      meta: { header: false },
      component: () => import("../views/LocalStemExpertsView.vue"),
    },
  ],
  scrollBehavior: () => ({ top: 0 }),
});
