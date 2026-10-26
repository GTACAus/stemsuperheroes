import { createRouter, createWebHashHistory } from 'vue-router';

export default createRouter({
  // Hash history keeps routes working when dist/index.html is opened directly (file://).
  history: createWebHashHistory(),
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
});
