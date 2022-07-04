import { createRouter, createWebHashHistory } from "vue-router";
const router = createRouter({
  history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes: [
    {
      path: '/recursionComponent',
      name: 'recursionComponent',
      component: () => import('../views/recursionComponent/index.vue')
    },
    {
      path: '/dialog',
      name: 'dialog',
      component: () => import('../views/dialog/index.vue')
    },
  ],
});

export default router;
