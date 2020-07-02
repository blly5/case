import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/view/layout'),
      redirect: 'todo',
      children: [
        {
          path: '/todo',
          name: 'todo',
          component: () => import('@/view/todo')
        }
      ]
    }
  ]
})
