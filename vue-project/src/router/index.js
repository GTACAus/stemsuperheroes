import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: () => import('../views/HomeView.vue') },
    { path: '/local-stem-experts', name: 'experts', component: () => import('../views/LocalStemExpertsView.vue') },
    {
      path: '/science-around-us',
      name: 'science',
      component: () => import('../views/PlaceholderView.vue'),
      props: { title: 'Science is All Around Us' },
    },
  ],
  scrollBehavior: () => ({ top: 0 }),
})
