import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/layout/basic-layout/index.vue'),
    redirect: {
      name: 'signin'
    },
    children: [
      {
        path: 'recommend',
        name: 'recommend',
        component: () => import('@/pages/recommend/index/index.vue')
      },
      {
        path: 'forum',
        name: 'forum',
        component: () => import('@/pages/forum/index/index.vue')
      },
      {
        path: 'user',
        name: 'user',
        // component: () => import('@/layout/user-layout/index.vue'),
        children: [
          {
            path: 'signin',
            name: 'signin',
            component: () => import('@/pages/user/signin/index/index.vue')
          },
          {
            path: 'signup',
            name: 'signup',
            component: () => import('@/pages/user/signup/index/index.vue')
          }
        ]
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
