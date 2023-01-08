import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/article/:articleId',
      name: 'article',
      component: () => import('../views/ReadBlog.vue')

    },
    {
      path: '/manage/article/',
      name: 'managearticle',
      component: () => import('../views/ManageBlogList.vue')
    },
    {
      path: '/manage/article/edit',
      name: 'manageEdit',
      component: () => import('../views/ManageEditor.vue')
    }

  ]
})

export default router
