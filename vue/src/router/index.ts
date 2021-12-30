import { createRouter, createWebHashHistory } from "vue-router";
const router = createRouter({
  history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes: [
    {
      path: "/",
      name: "home",
      component: () =>
        import("../views/Home.vue"),
      children: [
        {
          path: '/tree',
          component: () => import('../views/Tree.vue')
        },
        {
          path: '/store',
          component: () => import('../views/Store.vue')
        }
      ]
    },
  ],
});

export default router;
