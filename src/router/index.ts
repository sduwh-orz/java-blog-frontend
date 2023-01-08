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
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue')
    },
    {
      path: '/logout',
      name: 'logout',
      component: () => import('../views/Logout.vue')
    },
    {
      path: '/article/:articleId',
      name: 'article',
      component: () => import('../views/Article.vue')
    },
    {
      path: '/manage/article/',
      name: 'managearticle',
      component: () => import('../views/ManageBlogList.vue')
    },
    {
      path: '/tag',
      name: 'tag',
      component: () => import('../views/BlogListandTag.vue')
    },
    {
      path: '/manage/article/edit/:articleId',
      name: 'manageEdit',
      component: () => import('../views/ManageEditor.vue')
    }

  ]
})

export default router
